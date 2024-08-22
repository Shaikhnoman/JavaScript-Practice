const newspapers = [
    {
        name: 'thetimes',
        address: 'https://www.thetimes.co.uk/environment/climate-change'
    },
    {
        name: 'gaurdian',
        address: 'https://www.theguardian.com/environment/climate-crisis'
    },
    {
        name: 'telegraph',
        address: 'https://www.telegraph.co.uk/climate-change'
    }
]
newspapers.forEach((newspaper) => {
    console.log(`Name: ${newspaper.name}`);
    console.log(`Address: ${newspaper.address}`);
})