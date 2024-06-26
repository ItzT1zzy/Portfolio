import { title } from "@/components/primitives";
import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import {Link} from "@nextui-org/link";

export default function ProjectsPage() {
	return (
		<div>
			<h1 className={title()}>Мои проекты</h1>
			<div className="md:grid md:gap-4 md:grid-cols-3 flex flex-col">
				<Card className="max-w-[400px] mt-7 ml-7 md:ml-0">
					<CardHeader className="flex gap-3">
						<Image
							alt="nextui logo"
							height={40}
							radius="sm"
							src="https://avatars.githubusercontent.com/u/145786410?v=4"
							width={40}
						/>
						<div className="flex flex-col">
							<p className="text-md">Portfolio</p>
							<p className="text-small text-default-500">by t1zzy_</p>
						</div>
					</CardHeader>
					<Divider/>
					<CardBody>
						<p>Обычный сайт-портфолио для личного использования. :D</p>
					</CardBody>
					<Divider/>
					<CardFooter>
						<Button variant="shadow" color="primary" className="h-[35px]" isDisabled>
							О проекте
						</Button>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}
