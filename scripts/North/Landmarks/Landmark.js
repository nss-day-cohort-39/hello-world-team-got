const Landmark = (landmarkObject) => {
    return `
    <h3><b>${landmarkObject.name}</b></h3>
        <p class="preview">${landmarkObject.description}</p>
            
    `
}

export default Landmark