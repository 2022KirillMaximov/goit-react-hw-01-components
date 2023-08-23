import PropTypes from 'prop-types';



export const Statistics = ({ title, data }) => {
    return(
    <section >
            {title && <h2 >{title}</h2>}
            
            

            <ul >
                {data.map(((el, _, arr) => {
                    return (
                        <li
              quantity={arr.length}
              key={el.id}
                        >
                            <span>{el.label}</span>
                            <span>{el.percentage}</span>
                        </li>
                    )
                }))
                    
                }    
            </ul>
            </section>
)
}
Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};