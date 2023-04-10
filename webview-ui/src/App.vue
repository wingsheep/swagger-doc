<script setup lang="ts">
import { provideVSCodeDesignSystem, vsCodeButton, vsCodeDataGrid, vsCodeDataGridCell, vsCodeDataGridRow, vsCodeDivider, vsCodePanelTab, vsCodePanelView, vsCodePanels, vsCodeTag } from '@vscode/webview-ui-toolkit'
import type { Ref } from 'vue'
import { computed, ref } from 'vue'
import JsonViewer from 'vue-json-viewer'
import 'vue-json-viewer/style.css'
import type { OpenAPIV2, OpenAPIV3 } from 'openapi-types'
import { vscode } from './utilities/vscode'
import SchemaTree from './components/SchemaTree.vue'
// In order to use the Webview UI Toolkit web components they
// must be registered with the browser (i.e. webview) using the
// syntax below.
provideVSCodeDesignSystem().register(
  vsCodeButton(),
  vsCodeTag(),
  vsCodeDataGrid(),
  vsCodeDataGridCell(),
  vsCodeDataGridRow(),
  vsCodePanels(),
  vsCodePanelTab(),
  vsCodePanelView(),
  vsCodeDivider(),
)
// Finally, if you would like to register all of the toolkit
// components at once, there's a handy convenience function:
//
// provideVSCodeDesignSystem().register(allComponents.register());

function handleHowdyClick() {
  vscode.postMessage({
    command: 'alert',
    text: 'Hey there partner! 🤠',
  })
}
const apiData: Ref<OpenAPIV2.OperationObject | null> = ref(null)
const apiMethod: Ref<OpenAPIV3.HttpMethods | undefined> = ref()
const apiUrl: Ref<string | undefined> = ref()
const parameters: Ref<(OpenAPIV2.ParameterObject)[]> = ref([])
const responses: Ref<any> = ref({})
const activeId: Ref<string | number> = ref('200')
const bodyParameters = computed(() => {
  const bodyData = parameters.value.filter(item => item.in === 'body')
  return bodyData ? bodyData[0] : null
})
const otherParameters = computed(() => {
  return parameters.value.filter(item => item.in !== 'body')
})
function changePanelTab(key) {
  activeId.value = key
}
window.addEventListener('message', (event) => {
  const {
    command, data: {
      previewData, webviewPanelKey,
    },
  } = event.data
  const {
    detailData, path, method,
  } = previewData
  switch (command) {
    case 'setMessage': {
      apiData.value = detailData
      parameters.value = detailData?.parameters || []
      responses.value = detailData?.responses
      apiUrl.value = path
      apiMethod.value = method
      vscode.setState({ serializerData: JSON.stringify(previewData), webviewPanelKey })
      break
    }
    default:
      break
  }
})
</script>

<template>
  <main>
    <div class="api-title">
      <span class="title">{{ apiData?.summary }}</span>
      <span v-for="tag in apiData?.tags" :key="tag" class="api-tag" @click="handleHowdyClick">
        #{{ tag }}
      </span>
    </div>
    <div class="base-info-path">
      <div class="method-tag" :class="apiMethod">
        {{ apiMethod?.toLocaleUpperCase() }}
      </div>
      <span class="api-url">
        {{ apiUrl }}
      </span>
    </div>
    <div class="card">
      <div class="card-title">
        请求参数
      </div>
      <vscode-data-grid v-if="otherParameters.length" class="data-grid" aria-label="其他参数" grid-template-columns="240px 80px 120px 88px">
        <vscode-data-grid-row class="data-grid-row" row-type="header">
          <vscode-data-grid-cell cell-type="columnheader" grid-column="1">
            参数名
          </vscode-data-grid-cell>
          <vscode-data-grid-cell cell-type="columnheader" grid-column="2">
            位置
          </vscode-data-grid-cell>
          <vscode-data-grid-cell cell-type="columnheader" grid-column="3">
            类型
          </vscode-data-grid-cell>
          <vscode-data-grid-cell cell-type="columnheader" grid-column="4">
            必需
          </vscode-data-grid-cell>
          <vscode-data-grid-cell cell-type="columnheader" grid-column="5">
            说明
          </vscode-data-grid-cell>
        </vscode-data-grid-row>
        <vscode-data-grid-row v-for="(row, index) in otherParameters" :key="index" class="data-grid-row">
          <vscode-data-grid-cell grid-column="1">
            {{ row.name }}
          </vscode-data-grid-cell>
          <vscode-data-grid-cell grid-column="2">
            {{ row.in }}
          </vscode-data-grid-cell>
          <vscode-data-grid-cell grid-column="3">
            {{ row.type }}({{ row.format }})
          </vscode-data-grid-cell>
          <vscode-data-grid-cell grid-column="4">
            {{ row.required ? '是' : '否' }}
          </vscode-data-grid-cell>
          <vscode-data-grid-cell grid-column="5">
            {{ row.description }}
          </vscode-data-grid-cell>
        </vscode-data-grid-row>
      </vscode-data-grid>
      <div v-if="bodyParameters">
        <div class="consumes">
          Body参数（{{ apiData?.consumes && apiData?.consumes[0] }}）
        </div>
        <div class="schema-view">
          <div class="schema">
            <div class="schema-title">
              数据结构
            </div>
            <SchemaTree :schema="bodyParameters.schema" />
          </div>
          <div class="examples">
            <div class="schema-title">
              示例
            </div>
            <JsonViewer
              :value="bodyParameters.examples"
              :expand-depth="5"
              :copyable="true"
              :boxed="false"
              sort
              :preview-mode="false"
              show-double-quotes
              theme="my-awesome-json-theme"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-title">
        返回响应
      </div>
      <vscode-panels class="response-panel" :activeid="activeId">
        <vscode-panel-tab v-for="(item, key) in responses" :id="key" :key="key" @click="changePanelTab(key)">
          {{ item?.description }}({{ key }})
        </vscode-panel-tab>
        <vscode-panel-view v-for="(item, key) in responses" v-show="key === activeId" :id="key" :key="key" class="schema-view">
          <div class="schema">
            <div class="schema-title">
              数据结构
            </div>
            <SchemaTree :schema="item.schema" />
          </div>
          <div class="examples">
            <div class="schema-title">
              示例
            </div>
            <JsonViewer
              :value="item.examples || {}"
              :expand-depth="5"
              copyable
              :boxed="false"
              sort
              :preview-mode="false"
              show-double-quotes
              theme="my-awesome-json-theme"
            />
          </div>
        </vscode-panel-view>
      </vscode-panels>
    </div>
  </main>
</template>

<style lang="scss">
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  padding: 16px;
}

main > * {
  margin: 0;
}
.api-title .title {
  font-weight: 600;
  font-size: 14px;
  margin: 10px 0;
}
.base-info-path {
  margin: 10px 0;
  .method-tag {
    margin-right: 8px;
  }
}
// values are default one from jv-light template
.my-awesome-json-theme {
  background: transparent;
  white-space: nowrap;
  color: #bfbaaa;
  font-size: 12px;
  line-height: 1.4;
  font-weight: 400;
  font-family: Consolas, Menlo, Courier, monospace;
  .jv-more .jv-toggle {
    transform: none;
    background-image: none;
    width: 0;
    height: 0;
    border: 5px solid;
    border-color: #525252 transparent  transparent transparent;
    &.open {
      transform: rotate(-180deg);
    }
  }
  .jv-ellipsis {
    color: #999;
    background-color: #eee;
    display: inline-block;
    line-height: 0.9;
    font-size: 0.9em;
    padding: 0px 4px 2px 4px;
    border-radius: 3px;
    vertical-align: 2px;
    cursor: pointer;
    user-select: none;
  }
  .jv-button { color: #49b3ff }
  .jv-key { color: #bfbaaa; margin-right: 6px; }
  .jv-item {
    &.jv-array { color: #bfbaaa }
    &.jv-boolean { color: #fc1e70 }
    &.jv-function { color: #067bca }
    &.jv-number { color: #fc1e70 }
    &.jv-number-float { color: #fc1e70 }
    &.jv-number-integer { color: #fc1e70 }
    &.jv-object { color: #bfbaaa }
    &.jv-undefined { color: #e08331 }
    &.jv-string {
      color: #42b983;
      word-break: break-word;
      white-space: normal;
    }
  }
  .jv-code {
    padding: 10px;
    .jv-toggle {
      background-image: none;
      width: 0;
      height: 0;
      border: 5px solid;
      border-color: transparent transparent transparent #6699cc;
      &.open {
        transform: rotate(90deg) translate(2px, 2px);
      }
      // &:before {
      //   padding: 0px 2px;
      //   border-radius: 2px;
      // }
      // &:hover {
      //   &:before {
      //     background: #eee;
      //   }
      // }
    }
  }
}
.card {
  width: 100%;
  .card-title {
    margin: 10px 0;
    font-size: 14px;
    font-weight: 600;
  }
}

.schema-view {
  display: flex;
  justify-content: space-between;
  border: 1px solid #252431;
  border-radius: 4px;
  padding: 0;
  margin-top: 10px;
  .schema-title {
    font-size: 14px;
    font-weight: 400;
    padding: 8px;
    border-bottom: 1px solid #252431;
  }
  .schema {
    width: 50%;
    border-right: 1px solid #252431;
    & > .schema-tree > .object.folder {
      &::before {
        display: none;
      }
    }
  }
  .examples {
    width: 50%;
  }
}

.method-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  margin-right: 8px;
  padding: 0 8px;
  font-size: 12px;
  line-height: 24px;
  font-weight: 700;
  border-radius: 4px;
  background: #1890ff;
  color: #fff;
  &.get {
    background: #52c41a;
    color: #fff;
  }
  &.post {
    background: #fa8c16;
    color: #fff;
  }
  &.delete {
    background: #d84a1b;
    color: #fff;
  }
  &.patch {
    background: #cc2c84;
    color: #fff;
  }
}
.api-tag {
  margin-right: 4px;
  font-size: 12px;
  color: #959da5;
}
.consumes {
  font-size: 0.75rem;
  margin-bottom: 10px;
}
.response-panel {
  .panel-tab {
    border: 1px solid #252431;
    border-bottom: none;
    padding-left: 8px;
  }
}
.data-grid {
  border: 1px solid #252431;
  border-bottom: none;
}
.data-grid-row {
  border-bottom: 1px solid #252431;
}
</style>
