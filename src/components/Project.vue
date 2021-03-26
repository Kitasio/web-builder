<template>
  <Modal :display="displayModal" :options="currentOptions" @deleteClass="deleteClass" @css="emitFromModal" @cleanCss="cleanCss" @saveCss="saveCss" @modalClose="modalClose" @text="insertText"/>
  <div id="project" @mousemove="plusAppear" class="h-screen">
      <div v-for="container in containers" :key="container.id" @click.self="modal(container)" :id="container.id" :class="container.css" class="relative border-highlight">
          <AddChild @click="addChild(container, 'bg-gray-200 h-auto')"/>
          <DeleteChild @click="deleteChild(container)"/>
          <p v-if="container.text">{{ container.text }}</p>
          <img v-else-if="container.img" :src="container.img" alt="">

          <div v-for="container in container.children" :key="container.id" @click.self="modal(container)" :id="container.id" :class="container.css" class="relative border-highlight">
                <AddChild @click="addChild(container, 'bg-gray-300 h-auto')" />
                <DeleteChild @click="deleteChild(container)"/>
                <p v-if="container.text">{{ container.text }}</p> 
                <img v-else-if="container.img" :src="container.img" alt="">
                
                <div v-for="container in container.children" :key="container.id" @click.self="modal(container)" :id="container.id" :class="container.css" class="relative border-highlight">
                        <AddChild @click="addChild(container, 'bg-gray-400 h-auto')" />
                        <DeleteChild @click="deleteChild(container)"/>
                        <p v-if="container.text">{{ container.text }}</p> 
                        <img v-else-if="container.img" :src="container.img" alt="">

                        <div v-for="container in container.children" :key="container.id" @click.self="modal(container)" :id="container.id" :class="container.css" class="relative border-highlight">
                                <DeleteChild @click="deleteChild(container)"/>
                                <p v-if="container.text">{{ container.text }}</p>
                                <img v-else-if="container.img" :src="container.img" alt="">

                        </div>
                </div>
          </div>
      </div>
      
      <div @click="addContainer" id="plus" class="cursor-pointer w-10 mx-auto my-12 transition duration-300 ease-in-out scale-50 opacity-0 transform">
        <img src="../assets/plus.svg" alt="">
      </div>
  </div>
</template>

<script>
import AddChild from './AddChild.vue'
import DeleteChild from './DeleteChild.vue'
import Options from './Options.vue'
import Modal from './Modal.vue'
import { ref } from '@vue/reactivity'
import plusAppear from '../composables/plusAppear'
import { onUpdated, watch, watchEffect } from '@vue/runtime-core'

export default {
    components: {
        AddChild,
        DeleteChild,
        Options,
        Modal,
    },
    setup() {
        const containers = ref([])
        const displayModal = ref(false)
        const currentOptions = ref([])
        const classSaved = ref(false)


        let val = 1

        const addContainer = () => {
            containers.value.push(
                {
                    id: val,
                    text: '',
                    img: '',
                    css: 'flex h-40 bg-gray-100',
                    children: []
                }
            )
            val += 1
        }

        const addChild = (container, cssVal) => {
            container.children.push({
                    id: val,
                    text: '',
                    img: '',
                    css: `flex m-5 w-full ${cssVal}`,
                    children: []
            })
            val += 1
        }

        const deleteChild = (container) => {
            let el = document.getElementById(String(container.id))
            el.remove()
        }
        
        const modalClose = () => {
            displayModal.value = false
        }

        const modal = (data) => {
            displayModal.value = true
            currentOptions.value = data
        }

        const insertText = (value) => {
            if (currentOptions.value) {
                currentOptions.value.text = ' ' + value
            }
        }

        const emitFromModal = (value) => {
            if (currentOptions.value.css && !value.saved) {
                currentOptions.value.css += ' ' + value.name
            }
        }

        const cleanCss = (value) => {
            if (currentOptions.value.css && !value.saved) {
                const cssList = currentOptions.value.css.split(/[ ]+/)
                cssList.forEach(() => {
                    const index = cssList.indexOf(value.name)
                    if (index > -1) {
                        cssList.splice(index, 1)
                        currentOptions.value.css = cssList.join(" ")
                    }
                })
            }
        }

        const deleteClass = (value) => {
            if (currentOptions.value.css) {
                const cssList = currentOptions.value.css.split(/[ ]+/)
                cssList.forEach(() => {
                    const index = cssList.indexOf(value)
                    if (index > -1) {
                        cssList.splice(index, 1)
                        currentOptions.value.css = cssList.join(" ")
                    }
                })
            }
        }

        const saveCss = (value) => {
            if (currentOptions.value.css) {
                currentOptions.value.css += ' ' + value.name
            }
        }


        onUpdated(() => {
            if (currentOptions.value.css) {
                const re = /(\w*-)(\w*-?\/?\.?)(\w*-?)(?!.*\1)|(\w*(?!\w*-)(?<!-\w+))/gm
                const cssList = currentOptions.value.css.match(re)
                let unique = [...new Set(cssList)]
                unique.forEach((val) => {
                    if (val.length < 2) {
                        const index = unique.indexOf(val)
                        if (index > -1) {
                          unique.splice(index, 1)
                        }
                    }
                })
                currentOptions.value.css = unique.join(" ")
            }
        })

        return { 
            plusAppear,
            containers,
            addContainer,
            addChild,
            deleteChild,
            displayModal,
            currentOptions,
            modal,
            emitFromModal,
            modalClose,
            insertText,
            cleanCss,
            saveCss,
            deleteClass,
        }
    },
}
</script>

<style>
.border-highlight {
    border: 1px rgba(129, 140, 248, 0) solid;
    transition: ease .5s;
}
.border-highlight:hover {
    border: 1px rgba(129, 140, 248, 1) solid;
}


</style>