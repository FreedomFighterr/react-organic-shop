import useCheckImagePath from '../../../custom_hooks/CheckImagePath';
import UnderFreshContainer from './UnderFreshContainer';
import styles from './FreshContainer.module.scss';
import FreshFruitCard from './FreshFruitCard';

const FreshContainer = () => {
    const leafImg = useCheckImagePath(`${process.env.PUBLIC_URL}/static/media/basil-leaf.png`, './static/media/basil-leaf.png')

    return (
        <>
            <section className={styles.freshSection}>
                <div className={styles.mainWrap}>
                    <div className={styles.freshWrap}>
                        <img className={styles.freshLeafImg} src={leafImg} alt="small-leaf-img" />
                        <div className={styles.freshProductsWrap}>
                            <FreshFruitCard />
                            <FreshFruitCard />
                            <FreshFruitCard />
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.underFreshSection}>
                <div className={styles.underFreshDiscountWrap}>
                    <div className={styles.mainWrap}>
                        <UnderFreshContainer type="disc" />
                    </div>
                </div>
                <div className={styles.underFreshRegisterWrap}>
                    <div className={styles.mainWrap}>
                        <UnderFreshContainer type="reg" />
                    </div>
                </div>
            </section>
        </>
    )
};

export default FreshContainer;