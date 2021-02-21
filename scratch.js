    function School (name, minYears) {
        if (!name || !name.trim()) {
            throw new Error("Не указано название школы");
        }

        if (!minYears || !parseInt(minYears)) {
            throw new Error("Не указано минимальное количество лет");
        }

        this.MIN_YEARS = minYears;
        this.SCHOOL_NAME = name;

        this.checkAge = function (age) {
            if (age <= this.MIN_YEARS) {
                return {
                    result: false,
                    message: `Вам запрещено водить авто, вам должно быть ${this.MIN_YEARS} лет или больше`
                };
            } else if (age > this.MIN_YEARS)  {
                return {
                    result: true,
                    message: `Добро пожаловать в автошколу ${this.SCHOOL_NAME}, ${name}`
                };
            }
        };

        this.getTeacherList = function () {
            return ["А. С. Иванов," ,
                "В. С. Петров," ,
                "И. А. Сидоров"]
        }

        this.getTeacher = function (id) {
            id = id || Math.floor(Math.random() * this.getTeacherList().length);
            return this.getTeacherList()[id];
        };

        this.welcome = function (name, years) {
            const SCHOOL_ADDRESS = 'Санкт-Петербург, ул. Пушкина, дом 23';

            name = name || prompt('Как вас зовут?');

            if (!name) {
                alert('Вы не указали имя!');
                return this.welcome();
            }

            years = years || Math.abs(parseFloat(prompt('Укажите ваш возраст')));

            if (!years) { // 14
                alert('Вы не указали возраст!');
                return this.welcome(name,years);
            }

            if (this.checkAge(years).result) {
                alert(`Добро пожаловать в автошколу ${this.SCHOOL_NAME}, ${name}`);
            } else  {
                return alert(this.checkAge(years).message);
            }

            const TEACHER_NAME = this.getTeacher();

            return alert(`Ваш преподаватель: ${TEACHER_NAME}\n\nЖдём вас по адресу: ${SCHOOL_ADDRESS}`)

        };

    }

    let autoSchool = new School('Парус', 18);

    autoSchool.welcome();


