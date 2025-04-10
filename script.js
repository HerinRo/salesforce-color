function copyToClipboard(element) {
    const colorChip = element.closest('.color-chip');
    const input = colorChip.querySelector('.color-hex');
    const value = input.value;

    // 클립보드 복사
    navigator.clipboard.writeText(value).then(() => {
        console.log(`Copied: ${value}`);
    }).catch(err => {
        console.error('Failed to copy!', err);
    });

    // 애니메이션 효과 주기
    element.classList.add('swashOut');

    // 0.4초 뒤 클래스 제거해서 다시 누를 때도 적용되도록 함
    setTimeout(() => {
        element.classList.remove('swashOut');
    }, 400);
}
