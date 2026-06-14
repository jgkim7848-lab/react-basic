// 타입들을 정의 (여러 컴포넌트에서 사용되는 타입을 별도의 파일로 분리)

export type userType = {
    id: number;
    username: string;
    email: string;
    active: boolean;
}

export type othersType = {
    // 다른 타입이 또 있다면 내보내기 가능.
}

export interface othersInterface {
    // interface = 이 없음.
}