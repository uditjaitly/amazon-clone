import bcrypt from 'bcryptjs'
 const data={
    users:[
        {
            name:'Udit',
            email:"udit@example.com",
            password:bcrypt.hashSync("1996",8),
            isAdmin:true

        },
        {
            name:'John',
            email:'john@example.com',
            password:bcrypt.hashSync('1992',8),
            isAdmin:false

        }
    ],
    products:[
        {
          
            name:"Playstation 4 Bundle",
            category:"videogames",
            images:"p1",
            price:400,
            brand:"Sony",
            rating:5,
            numReviews:10,
            description: "playstation 4 bundle",
            count:5
        },
        {
         
            name:"Playstation 5",
            category:"videogames",
            images:"p2",
            price:500,
            brand:"Sony",
            rating:5,
            numReviews:13,
            description: "playstation 5 console",
            count:0
        },
        {
          
            name:"Xbox One S",
            category:"videogames",
            images:"p3",
            price:300,
            brand:"Microsoft",
            rating:4.5,
            numReviews:15,
            description: "xbox one s console",
            
            count:8
        },
        {
         
            name:"Kindle 2020",
            category:"electronics",
            images:"p4",
            price:70,
            brand:"Amazon",
            rating:5,
            numReviews:14,
            description: "amazon kindle paperwhite",
            
            count:32
        },
        {
         
            name:"Pedigree",
            category:"pets",
            images:"p5",
            price:30,
            brand:"pedigree",
            rating:4,
            numReviews:10,
            description: "pedigree dog food",
            count:43
        },
       
    ]
}

export default data

