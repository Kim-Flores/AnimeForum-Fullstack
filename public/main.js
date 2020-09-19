
//client side javascript

const thumbUp = document.getElementsByClassName("fa-thumbs-up");
const thumbDown = document.getElementsByClassName("fa-thumbs-down");
const trash = document.getElementsByClassName("fa-trash");


Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[7].innerText)
        const id = this.parentNode.parentNode.childNodes[13].dataset.id
        console.log(id,thumbUp)
        console.log(this.parentNode.parentNode.childNodes,'childnodes')
        fetch('thumbUp', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'id': id,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});
Array.from(thumbDown).forEach(function(element) {
      element.addEventListener('click', function(){
        const id = this.parentNode.parentNode.childNodes[13].dataset.id
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[7].innerText)
        fetch('thumbDown', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'id': id,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const id = this.parentNode.parentNode.childNodes[13].dataset.id
        console.log(id)
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'id': id,
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
