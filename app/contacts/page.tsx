import { title } from "@/components/primitives";
import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import {Image} from "@nextui-org/image";
import {Link} from "@nextui-org/link";

export default function ContactsPage() {
	return (
		<div>
			<h1 className={title()}>Связь со мной</h1>
			<div className="md:grid md:gap-4 md:grid-cols-3 flex flex-col">
				<Card className="max-w-[426px] mt-7 ml-7 md:ml-0">
					<CardHeader className="flex gap-3">
						<Image
							alt="nextui logo"
							height={40}
							radius="sm"
							src="https://s1.hostingkartinok.com/uploads/images/2024/04/1f1a8235f71898554dab29745f4a46b6.png"
							width={40}
						/>
						<div className="flex flex-col">
							<p className="text-md">Telegram</p>
						</div>
					</CardHeader>
					<Divider/>
					<CardBody>
						<p>Мой телеграм: <span className="font-bold text-primary"><a target="_blank" href="https://t.me/ItzTzzy">@ItzT1zzy</a></span><br/>В сети там 24/7, отвечаю сразу и быстро по всем вопросам или просто общению туда.</p>
					</CardBody>
				</Card>
				<Card className="max-w-[426px] mt-7 ml-7">
					<CardHeader className="flex gap-3">
						<Image
							alt="nextui logo"
							height={40}
							radius="sm"
							src="https://s1.hostingkartinok.com/uploads/images/2024/04/514ff3646661e586016821d0cc73fc1e.png"
							width={40}
						/>
						<div className="flex flex-col">
							<p className="text-md">Discord</p>
						</div>
					</CardHeader>
					<Divider/>
					<CardBody>
						<p>Мой дискорд: <span className="font-bold text-primary">t1zzy_</span><br/>Сижу там часто но лучше писать в телеграм т.к он всегда под рукой.</p>
					</CardBody>
				</Card>
				<Card className="max-w-[426px] mt-7 ml-7">
					<CardHeader className="flex gap-3">
						<Image
							alt="nextui logo"
							height={40}
							radius="sm"
							src="https://s1.hostingkartinok.com/uploads/images/2024/04/5d02f501d470c13133fed17fe68eb505.png"
							width={40}
						/>
						<div className="flex flex-col">
							<p className="text-md">Instagram</p>
						</div>
					</CardHeader>
					<Divider/>
					<CardBody>
						<p>Мой инстаграм: <span className="font-bold text-primary"><a target="_blank" href="https://instagram.com/_makss.sssim_">_makss.sssim_</a></span><br/>Я не знаю зачем он вам, но пусть будет.</p>
					</CardBody>
				</Card>
				<Card className="max-w-[426px] mt-7 ml-7 md:ml-0">
					<CardHeader className="flex gap-3">
						<Image
							alt="nextui logo"
							height={40}
							radius="sm"
							src="https://s1.hostingkartinok.com/uploads/images/2024/04/1f1a8235f71898554dab29745f4a46b6.png"
							width={40}
						/>
						<div className="flex flex-col">
							<p className="text-md">Telegram Channel</p>
						</div>
					</CardHeader>
					<Divider/>
					<CardBody>
						<p>Мой телеграм канал: <span className="font-bold text-primary"><a target="_blank" href="https://t.me/t1zzyintheosu">@t1zzyintheosu</a></span><br/>Ну типа телеграм канал. :D</p>
					</CardBody>
				</Card>
				<Card className="max-w-[426px] mt-7 ml-7">
					<CardHeader className="flex gap-3">
						<Image
							alt="nextui logo"
							height={40}
							radius="sm"
							src="https://s1.hostingkartinok.com/uploads/images/2024/04/514ff3646661e586016821d0cc73fc1e.png"
							width={40}
						/>
						<div className="flex flex-col">
							<p className="text-md">Discord Server</p>
						</div>
					</CardHeader>
					<Divider/>
					<CardBody>
						<p>Мой дискорд сервер: <span className="font-bold text-primary"><a href="https://dsc.gg/rockwell" target="_blank">Rockwell Club</a></span><br/>Обычный дискорд сервер.</p>
					</CardBody>
				</Card>
			</div>
		</div>
	);
}
