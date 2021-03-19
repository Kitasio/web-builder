<template>
  <div id="project" @mousemove="plusAppear" class="h-screen">
      <div v-for="container in containers" :key="container.id" :id="container.id" :class="container.css" class="relative border-highlight">
          <AddChild @click="addChild(container, 'bg-gray-200 h-auto')"/>
          <DeleteChild @click="deleteChild(container)"/>
          <p v-if="container.text">{{ container.text }}</p>

          <div v-for="container in container.children" :key="container.id" :id="container.id" :class="container.css" class="relative border-highlight">
                <AddChild @click="addChild(container, 'bg-gray-300 h-auto')" />
                <DeleteChild @click="deleteChild(container)"/>
                <p v-if="container.text">{{ container.text }}</p> 
                
                <div v-for="container in container.children" :key="container.id" :id="container.id" :class="container.css" class="relative border-highlight">
                        <AddChild @click="addChild(container, 'bg-gray-400 h-auto')" />
                        <DeleteChild @click="deleteChild(container)"/>
                        <p v-if="container.text">{{ container.text }}</p> 

                        <div v-for="container in container.children" :key="container.id" :id="container.id" :class="container.css" class="relative border-highlight">
                                <DeleteChild @click="deleteChild(container)"/>
                                <p v-if="container.text">{{ container.text }}</p>

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
import { ref } from '@vue/reactivity'
import plusAppear from '../composables/plusAppear'
import { watch } from '@vue/runtime-core'

export default {
    components: {
        AddChild,
        DeleteChild,
    },
    setup() {
        const containers = ref([])

        let val = 1
        const addContainer = () => {
            containers.value.push(
                {
                    id: val,
                    text: '',
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
                    css: `flex m-5 w-full ${cssVal}`,
                    children: []
            })
            val += 1
        }

        const deleteChild = (container) => {
            console.log(document.getElementById(String(container.id)))
            let el = document.getElementById(String(container.id))
            el.remove()
        }

        watch(containers.value, () => {
            for (let el in containers.value) {
                console.log(containers.value[el])
                console.log(el)
            }
        })

        return { plusAppear, containers, addContainer, addChild, deleteChild }
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