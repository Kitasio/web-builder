<template>
<transition name="fade">
    <div v-if="display">
        <div class="modal fixed overscroll-include overflow-auto z-50 left-1/2 top-2/3 h-1/2 w-2/3 bg-indigo-100 rounded-lg shadow-md p-5 transition ease-in">
        <div @click="$emit('modalClose')" class="absolute right-3 top-2 cursor-pointer">x</div>
        <textarea v-model="textData" @keyup="$emit('text', textData)" cols="30" rows="1"></textarea>
           <div class="flex flex-col p-3 m-2 bg-indigo-700 text-white rounded-md uppercase" v-for="cluster in css" :key="cluster">
             <p @click="toggleHidden" class="text-center cursor-pointer">{{cluster.name}}</p>
            
              <div class="hidden flex flex-wrap transition duration-500 ease-in-out">
                <div class="flex-col flex-wrap p-3 m-2 bg-indigo-500 text-white rounded-md uppercase inline-block" v-for="attribute in cluster.attributes" :key="attribute">
                  <p @click="toggleHidden" class="text-center w-full cursor-pointer">{{attribute.name}}</p>

                  <div class="hidden flex flex-wrap">
                    <div class="flex-col flex-grow p-3 m-2 bg-indigo-300 text-white rounded-md uppercase inline-block" v-for="item in attribute.items" :key="item">
                      <p @click="toggleHidden" class="text-center w-full cursor-pointer">{{item.name}}</p>

                      <div class="hidden flex flex-wrap">
                        <div class="flex-1 p-3 m-2 bg-indigo-200 text-white rounded-full uppercase inline-block cursor-pointer hover:bg-indigo-500" @mouseenter="$emit('css', clas)" v-for="clas in item.classes" :key="clas"></div>
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
import { ref } from '@vue/reactivity'
export default {
    props: ["display", "options"],
    emits: ["css", "modalClose", "text"],
    setup(props) {
      const cssData = ref(props.options.css)
      const textData = ref('')

      const toggleHidden = (e) => {
        const sibling = e.target.nextSibling
        if (sibling.classList.contains("hidden")) {
          sibling.classList.remove("hidden")
        } else {
          sibling.classList.add("hidden")
        }
      }

      const css = ref({
        typography: {
          name: "typography",
          attributes: {
            size: {
              name: "font size",
              items: {
                size: {
                  name: "size",
                  visible: false,
                  classes: ["text-xs", "text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl", "text-4xl", "text-5xl", "text-6xl", "text-7xl", "text-8xl", "text-9xl"]
                },
                test: {
                  name: "test"
                },
                test1: {
                  name: "test"
                },
                test2: {
                  name: "test"
                },
                test3: {
                  name: "test"
                },
              }
            },
            test: {name: 'test'},
            test1: {name: 'test'},
            test2: {name: 'test'},
            test3: {name: 'test'},
          },
        },
        spacing: {
          name: "spacing",
          attributes: {
            margin: {
              name: "margin",
              items: {
                all: {
                  name: "all sides",
                  visible: false,
                  classes: ["m-0", "m-0.5", "m-1", "m-1.5", "m-2", "m-2.5", "m-3", "m-3.5", "m-4", "m-5", "m-6", "m-7", "m-8", "m-9", "m-10"]
                },
                y: {
                  name: "y axis",
                  visible: false,
                  classes: ["my-0", "my-0.5", "my-1", "my-1.5", "my-2", "my-2.5", "my-3", "my-3.5", "my-4", "my-5", "my-6", "my-7", "my-8", "my-9", "my-10"]
                },
                x: {
                  name: "x axis",
                  visible: false,
                  classes: ["mx-0", "mx-0.5", "mx-1", "mx-1.5", "mx-2", "mx-2.5", "mx-3", "mx-3.5", "mx-4", "mx-5", "mx-6", "mx-7", "mx-8", "mx-9", "mx-10"]
                },
              },
          },
            padding: {
              name: "padding",
              items: []
            }
          }
        },
        sizing: {
          name: "sizing",
          attributes: {
            width: {
              name: "width",
              items: {
                w: {
                  name: "width in rems",
                  visible: false,
                  classes: ["w-0", "w-0.5", "w-1", "w-1.5", "w-2", "w-2.5", "w-3", "w-3.5", "w-4", "w-6", "w-7", "w-8", "w-9", "w-10", "w-11", "w-12", "w-14", "w-16"]
                },
                wPercent: {
                  name: "width in percents",
                  visible: false,
                  classes: ["w-1/2", "w-1/3", "w-2/3", "w-1/4", "w-2/4", "w-3/4", "w-1/5", "w-2/5", "w-3/5", "w-4/5", "w-1/6", "w-2/6", "w-3/6", "w-4/6", "w-5/6", "w-1/12", "w-2/12", "w-3/12", "w-4/12", "w-5/12", "w-6/12", "w-7/12", "w-8/12", "w-9/12", "w-10/12", "w-11/12", "w-full"]
                }
              }
            },
            height: {
              name: "height",
              items: {
                h: {
                  name: "height in rems",
                  visible: false,
                  classes: ["h-0", "h-0.5", "h-1", "h-1.5", "h-2", "h-2.5", "h-3", "h-3.5", "h-4", "h-6", "h-7", "h-8", "h-9", "h-10", "h-11", "h-12", "h-14", "h-16"]
                },
                hPercent: {
                  name: "height in percents",
                  visible: false,
                  classes: ["h-1/2", "h-1/3", "h-2/3", "h-1/4", "h-2/4", "h-3/4", "h-1/5", "h-2/5", "h-3/5", "h-4/5", "h-1/6", "h-2/6", "h-3/6", "h-4/6", "h-5/6", "h-1/12", "h-2/12", "h-3/12", "h-4/12", "h-5/12", "h-6/12", "h-7/12", "h-8/12", "h-9/12", "h-10/12", "h-11/12", "h-full"]
                }
              }
            }
          }
        },
        backgrounds: {
          name: "backgrounds",
          attributes: {
            colors: {
              name: "colors",
              items: {
                black: {
                  name: "black",
                  visible: false,
                  classes: ["bg-black"]
                },
                white: {
                  name: "white",
                  visible: false,
                  classes: ["bg-white"]
                },
                gray: {
                  name: "gray",
                  visible: false,
                  classes: ["bg-gray-50", "bg-gray-100", "bg-gray-200", "bg-gray-300", "bg-gray-400", "bg-gray-500", "bg-gray-600", "bg-gray-700", "bg-gray-800", "bg-gray-900"]
                },
                red: {
                  name: "red",
                  visible: false,
                  classes: ["bg-red-50", "bg-red-100", "bg-red-200", "bg-red-300", "bg-red-400", "bg-red-500", "bg-red-600", "bg-red-700", "bg-red-800", "bg-red-900"]
                }
              }
            }
          }
        },
        borders: {
          name: "borders",
          attributes: {
            radius: {
              name: "radius",
              items: {
                all: {
                  name: "all sides",
                  visible: false,
                  classes: ["rounded-none", "rounded-sm", "rounded", "rounded-md", "rounded-lg", "rounded-xl", "rounded-2xl", "rounded-3xl", "rounded-full"]
                }
              }
            }
          }
        },
      })

      return { cssData, css, textData, toggleHidden }
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