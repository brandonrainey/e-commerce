function generate(element) {
    return [props.countArray].map((value) =>{
        if (value > 0){
            React.cloneElement(element, {
        key: value,
      })
        }
        
    
    }
     ); 
  }