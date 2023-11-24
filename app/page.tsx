import FeaturedPosts from '@/app/_components/home/FeaturedPosts';
import Hero from './_components/home/Hero';
import styles from './_styles/home.module.scss';

export default async function Index() {
	return (
		<div className={styles.page__container}>
			<Hero />
			<FeaturedPosts />
		</div>
	);
}
