// Code your solutions in this file
function writeCards (people_arr, occasion)
{
    let result = []
    for (let i = 0; people_arr.length > i; i++)
    {
        result.push(`Thank you, ${people_arr[i]}, for the wonderful ${occasion} gift!`)
    }
    return result
}

function countDown(count)
{
    // for (let i = count; i > -1; i--)
    // {
    //     console.log(i)
    // }
    let i = count
    while (i > -1)
    {
        console.log(i)
        i--
    }
}