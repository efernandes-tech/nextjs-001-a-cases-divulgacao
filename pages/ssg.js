function SSGPage({ mensagem }) {
    return <div>{mensagem}</div>;
}

function delay(seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
}

export const getStaticProps = async () => {
    await delay(2);

    return {
        props: {
            mensagem: 'Fui gerado no build',
        },
    };
};

export default SSGPage;