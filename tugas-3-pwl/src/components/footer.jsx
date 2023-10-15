import { 
} from "react-router-dom";

export default function Footer() {
    return (
      <>
        <div style={styles.footer}>
          <p style={{padding:0, margin:0}}>
            Pengenalan Web Lanjut @2023 - 120140234
            <br />
            Image src: <a href="https://placekitten.com/">https://placekitten.com/</a>
          </p>
        </div>  
      </>
    );
}

const styles = {
    footer: {
        backgroundColor: "#aa3333",
        color: "white",
        padding: "3px",
        left: "0",
        bottom: "0",
        width: "100%",
        textAlign: "center",
        // position: "fixed",
        fontSize: "12px",
    }
}