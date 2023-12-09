const DonutsData = {
    id: "Donuts",
    //infoPanel
    title: "Donuts",
    cookingTime: "45 mins",
    dishDescription: "Lorem ipsum dolor sit amet...",
    clockImg: "photos/icon4.PNG",
    //instructionPanel
    CookingSteps: [
        {
            stepTitle: "Step 1",
            pageNumber: 1,
            instructText: "Step 1 instructions...",
            ingreds: [
                { id: 'flour1', title: "1 Cup Flour", imageSrc: "photos/icon2.PNG" },
                { id: 'sugar1', title: "1 1/2 teaspoon sugar", imageSrc: "photos/icon1.PNG" },
                { id: 'flour2', title: "1 Cup Flour", imageSrc: "photos/icon2.PNG" },
                
            ]
        },
        {
            stepTitle: "Step 2",
            pageNumber: 2,
            instructText: "Step 2 instructions...",
            ingreds: [
                { id: 'oil1', title: "1 tablespoon oil", imageSrc: "photos/icon2.PNG" },
                { id: 'water1', title: "2 cups of water", imageSrc: "photos/icon1.PNG" },

            ]
        },
        {
            stepTitle: "Step 3",
            pageNumber: 3,
            instructText: "Step 3 instructions...",
            ingreds: [
            ]
        },
    ],

    IngredientsList: [
        "1/2lbs Flour",
        "olive oil",
    ],
    //faqPanel
    FaQs:[
        {
            question:"How many people does this serve?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga aliquam consequatur,recusandae voluptates doloremque incidunt, distinctio tempora aliquid.",
        },
        {
            question: "Special Tools (affiliate links)",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga aliquam consequatur,recusandae voluptates doloremque incidunt, distinctio tempora aliquid.",
        },
        {
            question: "Reheating and freezing",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit..."
        },
        {
            question: "Ingredients options",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit..."
        },
    ],

    CommentsData: [
        {
            name: "exampleName1",
            commentText: "First comment text...",
            profilePicSrc: "photos/icon4.PNG",
            rating: 5,
            reviewPhoto: "photos/download.jpg",
        },
    
        {
            name: "exampleName2",
            commentText: "second comment text...",
            profilePicSrc: "photos/icon4.PNG",
            rating: 4,
        },
    
        {
            name: "exampleName3",
            commentText: "third comment text...",
            profilePicSrc: "photos/icon4.PNG",
            rating: 5,
            reviewPhoto: "photos/example2.jpg",
        },
    ]
}

export default DonutsData;