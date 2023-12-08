const PancakeData = {
    id: "Pancakes",
    //infoPanel
    title: "Pancakes",
    cookingTime: "15 mins",
    dishDescription: "Lorem ipsum dolor sit amet...",
    clockImg: "photos/icon2.PNG",
    //instructionPanel
    CookingSteps: [
        {
            stepTitle: "Step 1",
            pageNumber: 1,
            instructText: "Step 1 instructions...",
            ingreds: [
                { id: 'flour1', title: "1 Cup Flour", imageSrc: "photos/icon3.PNG" },
                { id: 'sugar1', title: "1 cup sugar", imageSrc: "photos/icon2.PNG" },
                { id: 'water1', title: "1 Cup Water", imageSrc: "photos/icon1.PNG" },
                
            ]
        },
        {
            stepTitle: "Step 2",
            pageNumber: 2,
            instructText: "Step 2 instructions...",
            ingreds: [
                { id: 'bakingPowder1', title: "1 tablespoon baking powder", imageSrc: "photos/icon1.PNG" },
                { id: 'water2', title: "2 cups of water", imageSrc: "photos/icon3.PNG" },

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
        "3 cups water",
        "1 cup baking powder",
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

export default PancakeData;