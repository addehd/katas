/*
You probably know the "like" system from Facebook and other pages. 
People can "like" blog posts, pictures or other items. We want to 
create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, 
which must take in input array, containing the names
of people who like an item. It must return the 
display text as shown in the examples:
 
likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
 
 */

const names = ["Alex", "Jacob", "Mark", "Max"]

function likes(names) {
  let numberOfLikes = names.length
  let message
  
  switch (numberOfLikes) {
    case 0:
      message = 'no one likes this'
       break
    case 1:
       message = `${names[0]} likes this`
        break
    case 2:
        message = `${names[0]} and ${names[1]} like this`
        break
    case 3:
        message = `${names[0]}, ${names[1]} and ${names[2]} like this`
        break
    default:
      numberOfLikes
      message = `${names[0]}, ${names[1]} and ${numberOfLikes-2} others like this`
  }
  return message
}

console.log(likes(names)) 