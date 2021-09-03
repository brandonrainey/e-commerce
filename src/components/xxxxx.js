


   



     



      db.collection('userItems').onSnapshot(snapshot => {
          let changes = snapshot.docChanges();
          changes.forEach(change => {
              if(change.type == 'added') {
                    return item ? (
                        
                        
                    <Card className={classes.roott} style={{ height: 320}}>
                    <CardActionArea>
                        
                        <CardMedia
                        className={classes.media}
                        
                        title="Contemplative Reptile"
                        
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" onClick={() => console.log('clicked')}>
                            {item.title} 
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" onClick={() => console.log('clicked')} style={{borderBottom: '1px solid black'}}>
                            {item.description}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions >
                        <Typography variant='h6'>
                        ${item.price}
                        </Typography>
                        
                        <fr></fr><fr></fr><fr></fr><fr></fr><fr></fr><fr></fr><fr></fr><fr></fr><fr></fr><fr></fr>
                        <SimpleSnackbarCards
                        item={item}
                        myItems={props.myItems}
                        countTotal={props.countTotal}
                            count1={props.count1}
                            setCount1={props.setCount1}
                            count2={props.count2}
                            setCount2={props.setCount2}
                            count3={props.count3}
                            setCount3={props.setCount3}
                            count4={props.count4}
                            setCount4={props.setCount4}
                            count5={props.count5}
                            setCount5={props.setCount5}
                            count6={props.count6}
                            setCount6={props.setCount6}
                            count7={props.count7}
                            setCount7={props.setCount7}
                            count8={props.count8}
                            setCount8={props.setCount8}
                        />
                        <Button variant='contained' onClick={() => console.log(props.items)}>test</Button>
                        <fr></fr><fr></fr><fr></fr><fr></fr>{item.info}
                    </CardActions>
                    </Card>
                        ) : ('none')
              } else if (change.type == 'removed') {
                  console.log('hello')
              }
          })
      })


      function getItems() {
          db.collection('userItems').onSnapshot((snapshot) => {
              const myItems = [];
              snapshot.forEach((doc) => {
                  myItems.push(doc.data());
              });
              props.setItems(myItems)
          });
          
      }



      db.collection('userItems').onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        
        changes.forEach(change => {
            
            if(change.type == 'added') {




                onClick={() => {let copy = [...props.items]                                              
                    copy[row.id] = {title: titleRef.current.value,
                    description: descRef.current.value, 
                    price: priceRef.current.value,                                                                                                           
                    id: row.id}
                    console.log(row.id)
                    props.setItems(copy)
}}






db.collection('userItems').doc(row.title).update({title: titleRef.current.value,
    description: descRef.current.value, 
    price: priceRef.current.value,
  }).catch((error) => {
    console.log(error)
  })






  db.collection('userItems').doc(`${row.id}`).update({id: row.id})



  props.items.indexOf(`${{title: refs.current[i].current.value}}`)


  console.log(findWithAttr(props.items, 'title', refs.current[i].current.value))


  let newId = props.items.length
  let doesExist = props.items.filter(item => item.id === props.items.length)
  while (doesExist) {
    doesExist = props.items.filter(item => item.id === newId)
      newId += 1
  }


  <PrivateRoute exact path="/dashboard" component={Dashboard} />

            <PrivateRoute
              exact path="/dashboard"
              items={items} 
              setItems={setItems}
              component={Dashboard}
            
              
            />