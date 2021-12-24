import{Link} from 'react-router-dom';

export const MenuNgang=()=>{
return(
    <>
    <Link to="/">Home</Link> 
    <Link to="/about">About</Link> 
    <Link to="/counter">Counter</Link> 
    <Link to="/click-me">ClickMe</Link> 
    <Link to="/news">News</Link> 
    </>
)
};