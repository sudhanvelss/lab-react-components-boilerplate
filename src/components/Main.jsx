const Main = (props) => {
    const {imageData} = props
    console.log("image",imageData)
    console.log("state",props)
    return(
          <div>
        {
          imageData.map(image=>{
            return(
              <div key={image.id} className="column">
                <img src={image.img} alt=""></img>
              </div>
            )
          })
        }
      </div>
    )
}
export default Main