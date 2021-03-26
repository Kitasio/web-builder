import { ref } from "@vue/reactivity"

const css = ref({
    flexbox: {
        name: "flexbox",
        color: "bg-blue-700",
        visible: true,
        attributes: {
            flexParent: {
                color: "bg-blue-500",
                name: "flex parent",
                id: "flexParent",
                items: {
                    flexDirection: {
                        color: "bg-blue-300",
                        name: "flex direction",
                        visible: false,
                        classes: [
                            { name: "flex", color: "bg-blue-200", colorActive: "bg-blue-400", saved: false },
                            { name: "flex-row", color: "bg-blue-200", colorActive: "bg-blue-400", saved: false },
                            { name: "flex-row-reverse", color: "bg-blue-200", colorActive: "bg-blue-400", saved: false },
                            { name: "flex-col", color: "bg-blue-200", colorActive: "bg-blue-400", saved: false },
                            { name: "flex-col-reverse", color: "bg-blue-200", colorActive: "bg-blue-400", saved: false },
                        ]
                    },
                    flexWrap: {
                        color: "bg-blue-300",
                        name: "flex wrap",
                        visible: false,
                        classes: [
                            { name: "flex", color: "bg-blue-200", colorActive: "bg-blue-400", saved: false },
                            { name: "flex-wrap", color: "bg-blue-200", colorActive: "bg-blue-400", saved: false },
                            { name: "flex-wrap-reverse", color: "bg-blue-200", colorActive: "bg-blue-400", saved: false },
                            { name: "flex-nowrap", color: "bg-blue-200", colorActive: "bg-blue-400", saved: false },
                        ]
                    },
                }
            },
            flexChild: {
                color: "bg-blue-500",
                name: "flex child",
                id: "flexchild",
                items: {
                    flex1: {
                        color: "bg-blue-300",
                        name: "flex 1",
                        visible: false,
                        classes: [
                            { name: "flex-1", color: "bg-blue-200", colorActive: "bg-blue-400", saved: false },
                            { name: "flex-auto", color: "bg-blue-200", colorActive: "bg-blue-400", saved: false },
                            { name: "flex-initial", color: "bg-blue-200", colorActive: "bg-blue-400", saved: false },
                            { name: "flex-none", color: "bg-blue-200", colorActive: "bg-blue-400", saved: false },
                        ]
                    },
                    flexGrow: {
                        color: "bg-blue-300",
                        name: "flex grow",
                        visible: false,
                        classes: [
                            { name: "flex-grow-0", color: "bg-blue-200", colorActive: "bg-blue-400", saved: false },
                            { name: "flex-grow", color: "bg-blue-200", colorActive: "bg-blue-400", saved: false },
                        ]
                    },
                    flexShrink: {
                        color: "bg-blue-300",
                        name: "flex shrink",
                        visible: false,
                        classes: [
                            { name: "flex-shrink-0", color: "bg-blue-200", colorActive: "bg-blue-400", saved: false },
                            { name: "flex-shrink", color: "bg-blue-200", colorActive: "bg-blue-400", saved: false },
                        ]
                    },
                    order: {
                        color: "bg-blue-300",
                        name: "order",
                        visible: false,
                        classes: [
                            { name: "order-1", color: "bg-blue-200", colorActive: "bg-blue-400", saved: false },
                            { name: "order-2", color: "bg-blue-200", colorActive: "bg-blue-400", saved: false },
                            { name: "order-3", color: "bg-blue-200", colorActive: "bg-blue-400", saved: false },
                            { name: "order-4", color: "bg-blue-200", colorActive: "bg-blue-400", saved: false },
                            { name: "order-5", color: "bg-blue-200", colorActive: "bg-blue-400", saved: false },
                            { name: "order-6", color: "bg-blue-200", colorActive: "bg-blue-400", saved: false },
                            { name: "order-7", color: "bg-blue-200", colorActive: "bg-blue-400", saved: false },
                            { name: "order-8", color: "bg-blue-200", colorActive: "bg-blue-400", saved: false },
                            { name: "order-9", color: "bg-blue-200", colorActive: "bg-blue-400", saved: false },
                            { name: "order-10", color: "bg-blue-200", colorActive: "bg-blue-400", saved: false },
                            { name: "order-11", color: "bg-blue-200", colorActive: "bg-blue-400", saved: false },
                            { name: "order-12", color: "bg-blue-200", colorActive: "bg-blue-400", saved: false },
                            { name: "order-first", color: "bg-blue-200", colorActive: "bg-blue-400", saved: false },
                            { name: "order-last", color: "bg-blue-200", colorActive: "bg-blue-400", saved: false },
                            { name: "order-none", color: "bg-blue-200", colorActive: "bg-blue-400", saved: false },
                        ]
                    },
                }
            }
        },
    },
    typography: {
        name: "typography",
        color: "bg-gray-700",
        visible: true,
        attributes: {
        size: {
            color: "bg-gray-500",
            name: "font size",
            id: "fontSize",
            items: {
                size: {
                    color: "bg-gray-300",
                    name: "size",
                    visible: false,
                    classes: [
                    { name: "text-xs", color: "bg-gray-200", colorActive: "bg-gray-400", saved: false },
                    { name:"text-sm", color: "bg-gray-200", colorActive: "bg-gray-400", saved: false },
                    { name:"text-base", color: "bg-gray-200", colorActive: "bg-gray-400", saved: false },
                    { name:"text-lg", color: "bg-gray-200", colorActive: "bg-gray-400", saved: false },
                    { name:"text-xl", color: "bg-gray-200", colorActive: "bg-gray-400", saved: false },
                    { name:"text-2xl", color: "bg-gray-200", colorActive: "bg-gray-400", saved: false },
                    { name:"text-3xl", color: "bg-gray-200", colorActive: "bg-gray-400", saved: false },
                    { name:"text-4xl", color: "bg-gray-200", colorActive: "bg-gray-400", saved: false },
                    { name:"text-5xl", color: "bg-gray-200", colorActive: "bg-gray-400", saved: false },
                    { name:"text-6xl", color: "bg-gray-200", colorActive: "bg-gray-400", saved: false },
                    { name:"text-7xl", color: "bg-gray-200", colorActive: "bg-gray-400", saved: false },
                    { name:"text-8xl", color: "bg-gray-200", colorActive: "bg-gray-400", saved: false },
                    { name:"text-9xl", color: "bg-gray-200", colorActive: "bg-gray-400", saved: false },
                    ]
                }
            }
        },
        },
    },
    spacing: {
        name: "spacing",
        color: "bg-yellow-700",
        visible: true,
        attributes: {
            margin: {
                name: "margin",
                id: "margin",
                color: "bg-yellow-500",
                items: {
                    all: {
                        color: "bg-yellow-300",
                        name: "all sides",
                        visible: false,
                        classes: [
                            { name: "m-0", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "m-0.5", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "m-1", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "m-1.5", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "m-2", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "m-2.5", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "m-3", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "m-3.5", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "m-4", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "m-5", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "m-6", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "m-7", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "m-8", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "m-9", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "m-10", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                        ]
                    },
                    y: {
                        color: "bg-yellow-300",
                        name: "y axis",
                        visible: false,
                        classes: [
                            { name: "my-0", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "my-0.5", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "my-1", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "my-1.5", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "my-2", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "my-2.5", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "my-3", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "my-3.5", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "my-4", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "my-5", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "my-6", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "my-7", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "my-8", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "my-9", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "my-10", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                        ]
                    },
                    x: {
                        color: "bg-yellow-300",
                        name: "x axis",
                        visible: false,
                        classes: [
                            { name: "mx-0", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "mx-0.5", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "mx-1", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "mx-1.5", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "mx-2", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "mx-2.5", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "mx-3", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "mx-3.5", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "mx-4", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "mx-5", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "mx-6", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "mx-7", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "mx-8", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "mx-9", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "mx-10", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                        ]
                    },
                },
            },
            padding: {
                name: "padding",
                id: "padding",
                color: "bg-yellow-500",
                items: {
                    all: {
                        color: "bg-yellow-300",
                        name: "all sides",
                        visible: false,
                        classes: [
                            { name: "p-0", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "p-0.5", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "p-1", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "p-1.5", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "p-2", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "p-2.5", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "p-3", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "p-3.5", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "p-4", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "p-5", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "p-6", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "p-7", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "p-8", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "p-9", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "p-10", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                        ]
                    },
                    y: {
                        color: "bg-yellow-300",
                        name: "y axis",
                        visible: false,
                        classes: [
                            { name: "py-0", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "py-0.5", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "py-1", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "py-1.5", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "py-2", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "py-2.5", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "py-3", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "py-3.5", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "py-4", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "py-5", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "py-6", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "py-7", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "py-8", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "py-9", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "py-10", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                        ]
                    },
                    x: {
                        color: "bg-yellow-300",
                        name: "x axis",
                        visible: false,
                        classes: [
                            { name: "px-0", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "px-0.5", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "px-1", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "px-1.5", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "px-2", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "px-2.5", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "px-3", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "px-3.5", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "px-4", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "px-5", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "px-6", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "px-7", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "px-8", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "px-9", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                            { name: "px-10", color: "bg-yellow-200", colorActive: "bg-yellow-400", saved: false },
                        ]
                    },
                },
            },
        }
    },
    sizing: {
        name: "sizing",
        visible: true,
        color: "bg-red-700",
        attributes: {
            width: {
                color: "bg-red-500",
                name: "width",
                items: {
                w: {
                    name: "width in rems",
                    color: "bg-red-300",
                    visible: false,
                        classes: [
                            { name: "w-0", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-0.5", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-1", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-1.5", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-2", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-2.5", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-3", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-3.5", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-4", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-5", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-6", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-7", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-8", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-9", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-10", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                        ]
                },
                wPercent: {
                    name: "width in percents",
                    color: "bg-red-300",
                    visible: false,
                    classes: [
                            { name: "w-1/2", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-1/3", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-2/3", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-1/4", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-2/4", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-3/4", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-1/5", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-2/5", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-3/5", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-4/5", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-1/6", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-2/6", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-3/6", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-4/6", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-5/6", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-1/12", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-2/12", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-3/12", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-4/12", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-5/12", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-6/12", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-7/12", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-8/12", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-9/12", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-10/12", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-11/12", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "w-full", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                        ]
                    }
                }
            },
        height: {
            name: "height",
            color: "bg-red-500",
            items: {
            h: {
                name: "height in rems",
                visible: false,
                color: "bg-red-300",
                classes: [
                            { name: "h-0", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-0.5", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-1", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-1.5", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-2", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-2.5", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-3", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-3.5", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-4", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-5", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-6", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-7", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-8", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-9", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-10", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                        ]
            },
            hPercent: {
                name: "height in percents",
                visible: false,
                color: "bg-red-300",
                classes: [
                            { name: "h-1/2", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-1/3", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-2/3", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-1/4", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-2/4", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-3/4", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-1/5", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-2/5", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-3/5", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-4/5", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-1/6", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-2/6", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-3/6", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-4/6", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-5/6", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-1/12", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-2/12", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-3/12", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-4/12", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-5/12", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-6/12", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-7/12", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-8/12", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-9/12", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-10/12", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-11/12", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                            { name: "h-full", color: "bg-red-200", colorActive: "bg-red-400", saved: false },
                        ]
            }
            }
        }
        }
    },
    backgrounds: {
        name: "backgrounds",
        visible: true,
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
        visible: true,
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

export default css