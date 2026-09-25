document.querySelectorAll('.btn').forEach(b=>b.addEventListener('click',()=>{b.classList.add('pop');setTimeout(()=>b.classList.remove('pop'),180)}));
