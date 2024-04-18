import { Link } from "@nextui-org/link";
import { title, subtitle } from "@/components/primitives";
import {Button} from "@nextui-org/button";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 mt-7 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Привет, я&nbsp;</h1>
				<h1 className={title({ color: "blue" })}>t1zzy_&nbsp;</h1>
				<br />
				<h2 className={subtitle({ class: "mt-4" })}>
					И я начинающий программист из Украины.
				</h2>
			</div>

			<div className="flex gap-3">
				<Link href="/about" target="_self">
					<Button variant="shadow" color="primary">
						Обо мне
					</Button>
				</Link>
			</div>
		</section>
	);
}
