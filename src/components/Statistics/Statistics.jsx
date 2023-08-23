import PropTypes from 'prop-types';
import { SectionStatistics,Title,StatList,Item,Label,Percentage } from './Statistics.styled' 


export const Statistics = ({ title, data }) => {
    return(
    <SectionStatistics >
            {title && <Title >{title}</Title>}
            
            

            <StatList>
                {data.map(((el, _, arr) => {
                    return (
                        <Item
              key={el.id}
                        >
                            <Label>{el.label}</Label>
                            <Percentage>{el.percentage}</Percentage>
                        </Item>
                    )
                }))
                    
                }    
            </StatList>
            </SectionStatistics>
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