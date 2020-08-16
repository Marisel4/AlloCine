import React from 'react';
import '../asset/pagination.scss'
class pagination extends React.Component{

    render(){
          const {next,previous} = this.props;

          return (
            
           <div className="pagination">
             <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" onClick={()=>previous()}>Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" onClick={()=>next()}>Next</a></li>
                </ul>
             </nav>
           </div>         
        
            
        )
    }
}

export default pagination;
