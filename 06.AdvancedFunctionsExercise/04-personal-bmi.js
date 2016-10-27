function personalBMI(name, age, weight, height) {
    let bmi = Math.round(weight / Math.pow(height / 100, 2));
    let status = 'underweight';
    if (bmi >= 18.5 && bmi < 25) {
        status = 'normal';
    } else if (bmi >= 25 && bmi < 30) {
        status = 'overweight';
    } else if (bmi >= 30) {
        status = 'obese';
    }

    let result = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: bmi,
        status: status
    };

    if (status == 'obese') {
        result.recommendation = 'admission required';
    }

    return result;
}