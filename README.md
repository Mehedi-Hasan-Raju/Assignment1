# Assignment1
<h1>TypeScript-এ Interface এবং Type এর পার্থক্য</h1>

TypeScript ব্যবহার করার সময় আমরা প্রায়ই interface এবং type ব্যবহার করি ডেটার গঠন (structure) নির্ধারণ করার জন্য। দেখতে একই রকম হলেও এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে।<br>
<h3>1. Interface এক্সটেন্ড করা যায়, Type সাধারণত কম্বাইন করা হয়</h3>
.Interface extends ব্যবহার করে বড় করা যায়<br>
.Type সাধারণত & (intersection) ব্যবহার করে একাধিক টাইপ যুক্ত করে<br>

```
interface User {
  name: string;
}

interface Admin extends User {
  role: string;
}
```
.
<br>
```
type User = {
  name: string;
};

type Admin = User & {
  role: string;
};
```
<h3>2. Interface একই নামে একাধিকবার লেখা যায় (Declaration Merging)</h3><br>
.Interface-এর বড় সুবিধা হলো একই নামে একাধিকবার লিখলে TypeScript সেগুলোকে মর্জ (merge) করে নেয়।<br>

```
interface Person {
  name: string;
}

interface Person {
  age: number;
}
```
.কিন্তু type-এর ক্ষেত্রে এটা সম্ভব না।<br>

<h3>3. Type আরও বেশি ফ্লেক্সিবল</h3><br>
.Type দিয়ে শুধু object না, বরং union, primitive, tuple ইত্যাদিও ডিফাইন করা যায়।<br>

`type Status = "success" | "error" | "loading";
`
<br>

.Interface দিয়ে এটা করা যায় না।<br>
<h3>4. Interface মূলত Object-এর জন্য উপযুক্ত</h3><br>
.যখন object structure বা class implement করতে হয়, তখন interface বেশি ব্যবহার করা হয়।
<br>
<br>
<h1>Provide an example of using union and intersection types in TypeScript.</h1>
<h2>TypeScript-এ Union এবং Intersection Types ব্যবহার</h2><br>
.TypeScript-এ আমরা কখনও কখনও চাই একাধিক type-এর সংমিশ্রণ বা বিকল্প ব্যবহার করতে।<br>
এ জন্য আছে Union type এবং Intersection type।<br>
<br>
<h4>Union</h4>
.Union Type মানে কোনো ভেরিয়েবল একাধিক নির্দিষ্ট type এর মধ্যে যেকোনো একটি নিতে পারে।<br>
Union type তৈরি করতে " | " ব্যবহার করা হয়।<br>

```
let value: string | number;

value = "Hello"; 
value = 42;      
value = true;    //  Error: boolean 

```
.এখানে value string বা number হতে পারে।<br>
.অন্য কোনো type দিলে error হবে।<br>

<h4>Intersection Type</h4>
Intersection Type মানে একটি ভেরিয়েবল সবটি type এর বৈশিষ্ট্য একসাথে ধারণ করবে।<br>
Intersection type তৈরি করতে & ব্যবহার করা হয়।<br>

```
type Person = { name: string; age: number };
type Employee = { employeeId: number };

type Staff = Person & Employee;

let staffMember: Staff = {
  name: "Raju",
  age: 25,
  employeeId: 101
};
```

