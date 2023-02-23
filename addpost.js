const posts = [
    {name: 'post1' , content: 'content1'},
    {name: 'post2' , content: 'content2'},
    {name: 'post3' , content: 'content3'},
    {name: 'post4' , content: 'content4'}
]

function listPosts() {
   let promise = new Promise((resolve,reject) => {
    resolve(posts.map((post) => console.log(post)));
    reject('Posts not listed!');
   })
   return promise;
}

const addPost = (post) =>{
    posts.push(post)
    let promise = new Promise((resolve,reject) =>{
        resolve('Post added!');
        reject('Post not added!');
    })
    return promise;
}
/* Using Promise:
addPost( {name: 'post5' , content: 'content5'})
    .then((res) => {
        console.log(res);
        return listPosts();
    })
*/

    // Using async-await:
    async function process() {
        try{
        let res = await addPost({name: 'post5' , content: 'content5'});
        console.log(res);
        listPosts();
        }catch(err){
            console.log(err);
        }
    }
    process();




