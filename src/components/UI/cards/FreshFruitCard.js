import useImagePathHandler from '../../../custom_hooks/ImagePathHandler';
import GreenButton from '../buttons/GreenButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './FreshFruitCard.module.scss';

const FreshFruitCard = (props) => {
    const freshImg = useImagePathHandler(props.data.image);

    return (
        <div className={styles.freshCard}>
            <div className={styles.cardContentHolder}>
                <h3 className={styles.cardTitle}>{props.data.title}</h3>
                <p className={styles.cardText}>{props.data.text}</p>
                <GreenButton class={true}>
                    Shop Now
                    <FontAwesomeIcon className={styles.arrowIcon} icon={faArrowRight} />
                </GreenButton>
            </div>
            <img src={freshImg} className={styles.fruitImg} alt="fresh-fruit-img" />
        </div>
    )
};

export default FreshFruitCard;