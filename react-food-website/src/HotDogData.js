const HotDogData = {
    id: "Hotdogs",
    //infoPanel
    title: "Hotdogs",
    cookingTime: "5 mins",
    dishDescription: "Lorem ipsum dolor sit amet...",
    clockImg: "photos/icon1.PNG",
    //instructionPanel
    CookingSteps: [
        {
            stepTitle: "Step 1",
            pageNumber: 1,
            instructText: "cook Hotdog",
            ingreds: [
                {id: 'hotdog', title: 'hotdog', imageSrc: "photos/icon2.PNG" }
            ]
        },
        {
            stepTitle: "Step 2",
            pageNumber: 2,
            instructText: "Eat Hotdog",
            ingreds: [
                { id: 'CookedHotdog', title: "Cooked Hotdog", imageSrc: "photos/icon1.PNG" },
            ]
        },
    ],

    IngredientsList: [
        "hotDog",
        "Bun",
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

export default HotDogData;