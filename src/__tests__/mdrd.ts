import { getMDRD } from "../mdrd"

test.each`
    age  |  creatine  |  isWoman  |  expected
    ${66}   ${92}        ${false}    ${76}
    ${52}   ${114}       ${true}     ${46}
    ${79}   ${45}        ${true}     ${124}
    ${91}   ${133}       ${false}    ${47}
`('It should return the expected values', ({age, creatine, isWoman, expected}) => {
    expect(getMDRD(age, creatine, isWoman)).toEqual(expected)
})