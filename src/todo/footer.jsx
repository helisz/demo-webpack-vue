export default{
    data(){
        return{
            author: 'chris_he'
        }
    },
    render(){
        return(
            <div id="footer">
                <span>Written by {this.author}</span>
            </div>
        )
    }
}