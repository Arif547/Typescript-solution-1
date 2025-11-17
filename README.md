## 🎯 Interview Questions


### Blog Post In Bangla

## Blog 1 

1. What are some differences between interfaces and types in TypeScript?
   
   Answer: Typescript-এ interfaces and types হচ্ছে মূলত object এর Type define বা structure করতে ব্যবহার করা হয়। এই গুলো কাজ একি বাট কিচু পার্থক্য আছে.

    a) Extending / Inheritance
        <li>Interface সহজে extend করা যায়</li>
        <li>type extend করা যায় কিন্তু '&' ব্যবহার করা লাগে </li>

        
        interface User {
            name: string;
            age: number;
        }

        interface Admin extends User {
            role: string;
        }

        type User = {
        name: string;
        age: number;
        };

        type Admin = User & {
        role: string;
        };

        

    b) Declaration Merging: 
        interface → বারবার ডিক্লেয়ার করলে merge হয়ে যায়
        type → merge হয় না (error দিবে)

        
        interface User {
            name: string;
            }
            interface User {
            age: number;
            }

        // Resulting interface:
        // { name: string; age: number; }
        
    **ইন্টারফেস object structure এর জন্য ভালো।**
    **টাইপ more flexible এবং complex definition এর জন্য বেশি powerful।** 

## Blog 2

2) Explain the difference between `any`, `unknown`, and `never` types in TypeScript.

    Typescript `Any` হচ্ছে সকল টাইপকে বুজানো হই, এর মধ্য যেকোন টাইপ রাখা যাবে। `any` ব্যবহার করলে typescript এর মূল ব্যবহার নষ্ট হওঁয় যায়।
    TypeScript এর টাইপ চেকিং বন্ধ হয়ে যায়। এটা ব্যবহার করলে কোন error দিবে না


    
        let value: any;

        value = 10;
        value = "Hello";
        value = true;

        value.toUpperCase(); // No error, even if value is not a string
    

    unknown — safer alternative to any
    যেকোন ভ্যালু রাখা যাবে কিন্তু
    ভ্যালু ব্যবহার করার আগে TypeScript আপনাকে টাইপ চেক করতে বাধ্য করবে।
    
        let data: unknown;
        data = 10;
        data = "Hello";

    data.toUpperCase(); // ❌ Error — TypeScript doesn't know it's a string

    **never — এমন কিছু যা কখনো ঘটে না**
    **never টাইপ বোঝায় এমন একটি পরিস্থিতি যেখানে কখনোই কোনো ভ্যালু পাওয়া যাবে না।**


                