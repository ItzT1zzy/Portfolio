import {subtitle, title} from "@/components/primitives";

export default function AboutPage() {
    return (
        <div>
            <h1 className={title({ size: "md" })}>Обо мне</h1>
            <h2 className={subtitle({ size: "sm" })} >
                Привет, я Макс из Украины, начинающий программист, чья страсть к коду не знает границ. Ежедневно я
                погружаюсь в захватывающий мир программирования, наслаждаясь его вызовами и бесконечными возможностями.
                Создание проектов разного масштаба — это не только моя работа, но и источник истинного удовольствия.
                Изучение новых языков программирования и технологий стало неотъемлемой частью моего ежедневного ритма,
                поскольку это позволяет мне расширять свой арсенал навыков и становиться более эффективным
                разработчиком.
            </h2>
        </div>
    );
}