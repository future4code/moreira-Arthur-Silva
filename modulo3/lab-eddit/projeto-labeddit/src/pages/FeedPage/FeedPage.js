import useProtectPage from "../../hooks/useProtectPage"


const FeedPage = () => {
    
    useProtectPage()

    return(
        <div>
            <h1>HEADER/FEED</h1>
            <form action="">
                <input type="text" />
                <button>Postar</button>
            </form>
        </div>
    )
}

export default FeedPage