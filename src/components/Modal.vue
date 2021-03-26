<template>
<transition name="fade">

    <div v-if="display">
        <div class="modal fixed overscroll-include overflow-auto z-50 left-1/2 top-2/3 h-2/3 w-1/3 bg-gray-100 rounded-lg shadow-md p-5">
        <div @click="$emit('modalClose')" class="absolute w-5 right-3 top-3 cursor-pointer transition transform hover:scale-125">
          <img src="../assets/x.svg" alt="">
        </div>
        <div class="flex">
          <textarea class="rounded-lg m-2" v-model="textData" @keyup="$emit('text', textData)" cols="30" rows="1" placeholder="Insert text"></textarea>
          <!-- <input type="file" accept="image/*"> -->
        </div>
        <div class="flex flex-wrap">
          <div @click="$emit('deleteClass', item)" class="m-2 p-2 bg-white rounded-full cursor-pointer transition-all transform hover:scale-105" v-for="item in cssDataList" :key="item">
            <p>{{ item }}</p>
          </div>
          <input @keyup.enter="$emit('inputClass', inputClass); inputClass = ''" v-model="inputClass" type="text" class="m-2 p-2 bg-white rounded-full w-28">
        </div>
          <div :class="{ 'h-full': isActive }" class="flex flex-row flex-wrap">
          <div class="flex-grow transition transform" :class="{'w-full': isActive, 'h-full': isActive, 'hover:scale-105': notActive, 'hidden': !cluster.visible}" v-for="cluster in css" :key="cluster">
           <div v-if="cluster.visible" :class="{[cluster.color]: true, 'min-h-full': isActive}" class="p-3 m-2 text-white rounded-md uppercase transition transform">
             <p @click.self="clickCluster(cluster)" class="text-center cursor-pointer">{{cluster.name}}</p>
              <div :class="{ 'hidden': isHidden }" class="flex flex-wrap h-full">
                <div :id="attribute.id" :class="attribute.color" class="flex-col flex-wrap p-3 m-5 text-white rounded-md uppercase inline-block transition transform hover:scale-105" v-for="attribute in cluster.attributes" :key="attribute">
                  <p @click.self="toggleHidden" class="text-center w-full cursor-pointer">{{attribute.name}}</p>
                  <div class="hidden flex flex-wrap">
                    <div :class="item.color" class="flex-col flex-grow p-3 m-5 text-white rounded-md uppercase inline-block transition transform hover:scale-105" v-for="item in attribute.items" :key="item">
                      <p @click.self="toggleHidden" class="text-center w-full cursor-pointer">{{item.name}}</p>
                      <div class="hidden flex flex-wrap">
                          <div :class="{ [clas.colorActive]: activeClass(clas.name), [clas.color]: true, 'invisible': !clas.visible }" class="flex-1 p-3 m-2 rounded-full inline-block cursor-pointer lowercase transition transform hover:scale-105" @mouseenter="$emit('css', clas)" @mouseleave="$emit('cleanCss', clas)" @click="$emit('saveCss', clas); hideExceptTarget(item, clas);" v-for="clas in item.classes" :key="clas">{{clas.name}}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           </div>
          </div>
          </div>
        </div>
    </div>

</transition>
</template>

<script>
import css from '../composables/cssData'
import { ref } from '@vue/reactivity'
import { onUpdated, watch } from '@vue/runtime-core'

export default {
    props: ["display", "options", "activeClasses"],
    emits: ["css", "modalClose", "text", "cleanCss", "saveCss", "deleteClass", "inputClass"],
    setup(props) {
      const cssData = ref(props.options.css)
      const cssDataList = ref([])
      const textData = ref('')
      const isActive = ref(false)
      const notActive = ref(true)
      const isHidden = ref(true)
      const inputClass = ref('')

      const activeClass = (val) => {
          const cssList = props.options.css.split(/[ ]+/)
          const includes = cssList.includes(val)
          return includes
      }

      const hideExceptTarget = (item, clas) => {
        item.classes.forEach(element => {
          element.saved = !element.saved
          if (element.name != clas.name) {
            element.visible = !element.visible
          }
        });
      }

      const clickCluster = (val) => {
        isActive.value = !isActive.value
        isHidden.value = !isHidden.value
        notActive.value = !notActive.value
        // Hides everything except target
        for (let key in css.value) {
          if (css.value[key].name != val.name) {
            css.value[key].visible = !css.value[key].visible
            css.value[key].attributes.visible = !css.value[key].attributes.visible
          }
        }
      }

      const toggleHidden = (e) => {
        const self = e.target
        const sibling = e.target.nextSibling
        if (self.classList.contains("w-full")) {
          self.classList.remove("w-full")
          self.classList.remove("order-first")
        } else {
          self.classList.add("w-full")
          self.classList.add("order-first")
        }

        if (sibling.classList.contains("hidden")) {
          sibling.classList.remove("hidden")
        } else {
          sibling.classList.add("hidden")
        }
      }

      watch(() => {
        if (props.options.css) {
          cssDataList.value = props.options.css.split(/[ ]+/)
        }
      })

      return { cssData, css, textData, toggleHidden, clickCluster, isActive, isHidden, notActive, activeClass, hideExceptTarget, cssDataList, inputClass }
    }
}
</script>

<style>
.modal {
    transform: translate(-50%, -50%);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>