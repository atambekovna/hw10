import './Author.css'

function Author() {
    return (
        <div>
            <div className='author'>
                <h1>Johnny Depp</h1>
                <span>American actor | producer <br/> 24 years old, Hollywood</span>
                <h3 className='lang'><span style={{color: 'grey'}}>RU</span> | ENG</h3>
            </div>
            <div >
                <img className='author-img' src="https://i.pinimg.com/564x/5d/da/24/5dda24072f545f9a3bb4e160e2117606.jpg" alt="" />
            </div>
        </div>
    )
}

export default Author