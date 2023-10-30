interface Props
{
    selectsort:(sort:string)=>void;
    selected:string
}
const Sort = ({selectsort,selected}:Props) => {
    const sort=[
        {value:'name',label:'Name'},
        {value:'-released',label:'Release date'},
        {value:'-added',label:'Date added'},
        {value:'-metacritic',label:'Popularity'},
        {value:'-rating',label:'Average rating'},
        {value:'',label:'Relevance'}
    ]
    var ordered
    for(var item of sort)
    {
        if(item.value==selected)
        {
            ordered=item.label
            break
        }
    }
    return (
       <>
      
        <div className="dropdown mb-3" >
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    order by:{ordered||'Relevance'}
                </button>
                <ul className="dropdown-menu">
                    {sort.map(ord=><li key={ord.value} value={ord.value} onClick={()=>selectsort(ord.value)}><p>{ord.label}</p></li>)}
                    
                </ul>
            </div>
       </>
    );
}
export default Sort;