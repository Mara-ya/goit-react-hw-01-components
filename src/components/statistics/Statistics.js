import PropTypes from 'prop-types';
import { StatisticsList, StatisticsTitle, StatisticsItem, StatisticsLabel, StatisticsPercentage } from "./Statistics.styled";

export const Statistics = ({title, stats}) => {
    return (<StatisticsList>
        {title && <StatisticsTitle>{title}</StatisticsTitle>}
        {stats.map(({ id, label, percentage })  => (
            <StatisticsItem key={id}>
                <StatisticsLabel>{label}</StatisticsLabel>
                <StatisticsPercentage className="percentage">{`${percentage}%`}</StatisticsPercentage>
            </StatisticsItem>
        ))}
    </StatisticsList>)
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired
    )
};