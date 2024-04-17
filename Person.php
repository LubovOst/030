<?php

class Person {
  private $name;
  private $surname;
  private $age;
  private $hp;
  private $mother;
  private $father;

  function __construct($name, $surname, $age, $mother, $father)
  {
    $this->name = $name;
    $this->surname = $surname;
    $this->age = $age;
    $this->mother = $mother;
    $this->father = $father;
    $this->hp = 100;
  }

  function sayHi($name) {
    return "Hi $name, I`m " . $this->name;
  }

  function setHp($hp) {
    if ($this->hp + $hp > 100) $this->hp = 100;
    else $this->hp = $this->hp + $hp;
  }
  function getHp() {
    return $this->hp;
  }
  function getName() {
    return $this->name;
  }
  function getSurname() {
    return $this->surname;
  }
  function getAge() {
    return $this->age;
  }
  function getMother() {
    return $this->mother;
  }
  function getFather() {
    return $this->father;
  }

  function getInfo() {
    return '<h2> Несколько слов о моих родственниках: </h2>'
    . '     <br>' 
    . 'Меня зовут - ' 
    . $this->getName() 
    . '<br> Моя фамилия - ' 
    . $this->getSurname() 
    . '<br> Мне - ' 
    . $this->getAge() 
    . ' лет'
    . '<br> Моего папу зовут - ' 
    . $this->getFather()->getName()
    . ' его фамилия - ' 
    . $this->getFather()->getSurname() 
    . ' ему - ' 
    . $this->getFather()->getAge()
    . ' года'
    . '<br> Мою маму зовут - ' 
    . $this->getMother()->getName()
    . ' еe фамилия - ' 
    . $this->getMother()->getSurname() 
    . ' ей - ' 
    . $this->getMother()->getAge()
    . ' лет'
    . '<br> Моего дедушку по папиной линии зовут - ' 
    . $this->getFather()->getFather()->getName()
    . ' его фамилия - ' 
    . $this->getFather()->getFather()->getSurname() 
    . ' ему - ' 
    . $this->getFather()->getFather()->getAge()
    . ' года'
    . '<br> Мою бабушку по папиной линии зовут - ' 
    . $this->getFather()->getMother()->getName()
    . ' еe фамилия - ' 
    . $this->getFather()->getMother()->getSurname() 
    . ' ей - ' 
    . $this->getFather()->getMother()->getAge()
    . ' лет'
    . '<br> Моего дедушку по маминой линии зовут - ' 
    . $this->getMother()->getFather()->getName()
    . ' его фамилия - ' 
    . $this->getMother()->getFather()->getSurname() 
    . ' ему - ' 
    . $this->getMother()->getFather()->getAge()
    . ' лет'
    . '<br> Мою бабушку по маминой линии зовут - ' 
    . $this->getMother()->getMother()->getName()
    . ' еe фамилия - ' 
    . $this->getMother()->getMother()->getSurname() 
    . ' ей - ' 
    . $this->getMother()->getMother()->getAge()
    . ' лет'
    ;
  }
}

$igor = new Person("Igor", "Petrov", 68, null, null);
$elena = new Person("Elena", "Petrova", 66, null, null);

$viktor = new Person("Viktor", "Ivanov", 64, null, null);
$anna = new Person("Anna", "Ivanova", 60, null, null);

$alex = new Person("Alex", "Ivanov", 32, $anna, $viktor);
$olga = new Person("Olga", "Ivanova", 30, $elena, $igor);
$valera = new Person("Valera", "Ivanov", 5, $olga, $alex);


// echo $valera->getMother()->getFather()->getName();
echo $valera->getInfo();




//Здоровье человека не может быть больше 100


// $medKit = 50;

// $alex->setHp(-30); //Упал

// echo $alex->getHp() . "<br>";

// $alex->setHp($medKit); //Нашел аптечку

// echo $alex->getHp();
// echo $alex->sayHi($igor->name);

// echo $alex->name;
// $alex = new Person();

// $alex->name = "Alex";
