<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  schema: {
    type: Object,
    default: () => {
      return {
        title: '',
        type: 'object',
        properties: {
          无数据: {
            type: 'Object',
            items: {},
          },
        },
      }
    },
  },
  propkey: {
    type: Array,
    default: () => {
      return []
    },
  },
})
const lastPropKey = computed(() => {
  return props.propkey[props.propkey.length - 1]
})
const level = computed(() => {
  return props.propkey.length
})
function switchFold(schema) {
  schema.hasHide = !schema.hasHide
}
</script>

<template>
  <div class="schema-tree">
    <div
      v-if="schema.type === 'object'"
      class="object"
      :class="{
        folder: schema.properties,
        hasHide: schema.hasHide,
      }"
    >
      <div v-if="schema.properties && lastPropKey" @click="switchFold(schema)">
        <div v-if="!schema.hasHide" class="svg-icon">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-sm sl-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" /></svg>
        </div>
        <div v-else class="svg-icon">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-sm sl-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" /></svg>
        </div>
      </div>
      <div v-if="lastPropKey" class="info cursor" @click="switchFold(schema)">
        <div class="tag">
          {{ lastPropKey }}
        </div>
        <span class="type">{{ schema.type }}</span>
        <span v-show="schema.title" class="format">{{ `(${schema.title})` }}</span>
      </div>
      <div class="desc object-desc">
        {{ schema.description }}
      </div>
      <div v-for="(property, propkey) in schema.properties" v-show="!schema.hasHide" :key="propkey" class="property">
        <SchemaTree :schema="property" :propkey="[...props.propkey, propkey]" />
      </div>
    </div>
    <div
      v-else-if="schema.type === 'array'"
      class="array"
      :class="schema.items.type !== 'object' && schema.items.type !== 'array' ? '' : 'folder'"
    >
      <div v-if="schema.items.type === 'object'" @click="switchFold(schema.items)">
        <div v-if="!schema.items.hasHide" class="svg-icon">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-sm sl-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" /></svg>
        </div>
        <div v-else class="svg-icon">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-sm sl-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" /></svg>
        </div>
      </div>
      <div class="info">
        <div class="tag">
          {{ lastPropKey }}
        </div>
        <span class="type">{{ schema.type }}</span>
        <div v-if="schema.items">
          <div v-if="schema.items.type === 'object'" class="format cursor" @click="switchFold(schema.items)">
            <span>
              {{ `[${schema.items.type}](${schema.items.title})` }}
            </span>
            <span>
              {<span>
                {{ Object.keys(schema.items.properties).length }}
              </span>}
            </span>
          </div>
          <div v-else class="format">
            [{{ schema.items.type }}]
          </div>
        </div>
      </div>
      <div class="desc">
        {{ schema.description }}
      </div>
      <SchemaTree v-show="!schema.items.hasHide" :schema="schema.items" />
    </div>
    <div
      v-else
      class="other"
      :style="{
        paddingLeft: `${(level - 1) * 16}px`,
      }"
    >
      <div v-if="lastPropKey" class="info">
        <div class="tag">
          {{ lastPropKey }}
        </div>
        <span class="type">{{ schema.type }}</span>
        <span v-show="schema.format" class="format">{{ `<${schema.format}>` }}</span>
      </div>
      <div class="desc">
        {{ schema.description }}
      </div>
      <div v-show="schema.example !== undefined" class="example">
        示例值：<span>{{ schema.example }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.schema-tree {
  .svg-icon {
    width: 8px;
    cursor: pointer;
  }
  .object-desc {
    color: #7d858e;
    font-weight: 400;
    font-size: 12px;
    margin-top: 10px;
    padding-left: 4px;
  }
  .property {
    padding: 8px 0;
    margin-bottom: 8px;
    .info {
      display: flex;
      justify-content: start;
    }
    .tag {
      line-height: 22px;
      height: 22px;
      text-align: center;
      color: #58a6ff;
      background: rgb(88 166 255 / 12%);
      padding: 0 8px;
      border-radius: 4px;
      font-weight: 600;
      font-size: 12px;
      margin-right: 8px;
    }
    .type {
      line-height: 22px;
      height: 22px;
      color: #a2a9b1;
      font-weight: 500;
      font-size: 14px;
      margin-right: 4px;
    }
    .format {
      line-height: 22px;
      height: 22px;
      color: #7d858e;
      font-weight: 400;
      font-size: 12px;
    }
    .desc {
      color: #7d858e;
      font-weight: 400;
      font-size: 12px;
      padding-left: 4px;
    }
    .example {
      color: #7d858e;
      font-weight: 400;
      font-size: 12px;
      padding-left: 4px;
      span {
        font-weight: 400;
        padding: 0px 8px;
        background: #ffffff05;
        border-radius: 4px;
        border: 1px solid #272835;
        font-size: 12px;
        min-height: 22px;
        line-height: 160%;
        word-break: break-all;
        color: #7d858e;
      }
    }
  }
  .folder {
    position: relative;
    padding-left: 20px;
    // &.object {
    //   position: relative;
    //   &::before {
    //     position: absolute;
    //     content: '';
    //     display: block;
    //     width: 1px;
    //     left: 10px;
    //     height: calc(100% - 20px);
    //     left: 10px;
    //     top: 10px;
    //     background:#252431;
    //   }
    // }
    .svg-icon {
      position: absolute;
      left: 0;
      top: 4px;
    }
    &.hasHide {
      &.object {
        &::before {
          display: none;
        }
      }
    }
  }
  .cursor {
    cursor: pointer
  }
}
</style>
