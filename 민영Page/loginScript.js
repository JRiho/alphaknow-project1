document.addEventListener('DOMContentLoaded', function () {
    let loginType_id = document.getElementById('loginType_id');
    let loginType_qr = document.getElementById('loginType_qr');
    let id_login = document.getElementById('id_login');
    let qr_login = document.getElementById('qr_login');

    loginType_id.classList.add('active');

    loginType_id.addEventListener('click', function () {
        if (!loginType_id.classList.contains('active')) {
            loginType_id.classList.remove('inactive');
            loginType_id.classList.add('active');
            loginType_qr.classList.remove('active');
            loginType_qr.classList.add('inactive');
        }

        id_login.style.display = 'block';
        qr_login.style.display = 'none';
    });

    loginType_qr.addEventListener('click', function () {
        if (!loginType_qr.classList.contains('active')) {
            loginType_qr.classList.remove('inactive');
            loginType_qr.classList.add('active');
            loginType_id.classList.remove('active');
            loginType_id.classList.add('inactive');
        }

        qr_login.style.display = 'block';
        id_login.style.display = 'none';
    });
});

function login() {
    let id = document.getElementById('id').value;
    let pass = document.getElementById('pass').value;

    let adminAccount = { id: 'admin', pass: '0000' };
    let userAccount = { id: 'user', pass: '1234' };

    if (id == adminAccount.id && pass == adminAccount.pass) {
        window.location.href = '../팀프깃/구민page/지능화된 생산관리 솔루션 프로젝트/mainPage.html'
        alert('어서오세요 관리자님');
    } else if (id == userAccount.id && pass == userAccount.pass) {
        window.location.href = '../팀프깃/구민page/지능화된 생산관리 솔루션 프로젝트/mainPage.html'
        alert('어서오세요 user님')
    } else {
        alert('아이디와 비밀번호를 확인해주세요.');
    }
}