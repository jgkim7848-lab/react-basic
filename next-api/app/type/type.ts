export interface userType{
    id: number;
    username: string;
    name: string;
    email: string;
    phone: string;
    website: string;
}

export interface userAllType{
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
      "street": string,
      "suite": string,
      "city": string,
      "zipcode": string,
      "geo": {
        "lat": string,
        "lng": string
      }
    },
    "phone": string,
    "website": string,
    "company": {
      "name": string,
      "catchPhrase": string,
      "bs": string
    }
}
    //만약에 모든 데이터를 가져오고싶다면???
// export interfae userAllType{

// }

/*
좋은 질문이에요! 😊  
TypeScript에서 객체 구조를 타입으로 표현할 때는 **중첩된 구조를 그대로 타입에 반영**해야 합니다.  

예를 들어 지금 데이터는 이렇게 생겼죠:

```json
{
  "company": {
    "name": "Yost and Sons",
    "catchPhrase": "Switchable contextually-based project",
    "bs": "aggregate real-time technologies"
  }
}
```

따라서 타입 정의도 이렇게 해야 합니다:

```ts
export interface userType {
  id: number;
  username: string;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
```

그럼 접근할 때는:

```ts
const companyName = user.company.name;
```

---

👉 만약 `name`도 또 다른 객체로 나눠져 있다면 (예: `company: { name: { a: string } }`), 타입을 이렇게 정의해야 합니다:

```ts
company: {
  name: {
    a: string;
  };
};
```

그리고 접근은:

```ts
user.company.name.a;
```

즉, **데이터 구조(JSON)** 그대로 타입을 중첩해서 표현해야 하고, 접근할 때도 `.`을 계속 이어서 쓰면 됩니다.  

정리하면:  
- `company.name`이 문자열이면 → `company: { name: string }`  
- `company.name`이 객체라면 → `company: { name: { … } }`  

혹시 지금은 `company.name`만 필요하세요, 아니면 `catchPhrase`, `bs` 같은 다른 필드도 같이 쓰실 계획인가요?
*/ 