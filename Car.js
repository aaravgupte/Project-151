AFRAME.registerComponent("car-model" ,{
    schema: {
        modelRef: {type:"string",default:"../assets/car/scene.gltf"}
    },
    init: function(){
        this.el.setAttribute("gltf-model", this.data.modelRef)
        const position={x:0 , y:45 , z:10};
        const rotation={x:0 , y:40 , z:0};

        this.el.setAttribute("position" , position)
        this.el.setAttribute("rotation" , rotation)

    }
})