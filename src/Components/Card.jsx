import PropTypes from "prop-types";

Card.propTypes = {
  datos: PropTypes.object,
};

export default function Card(props) {
  return (
    <div style={{ padding: 20, border: "1px solid black", borderRadius: 10 }}>
      <p style={{ color: "black", fontSize: 20 }}>
        Tu heroe favorito se llama {props.datos.nombre} y vive en{" "}
        {props.datos.direccion}
      </p>
    </div>
  );
}
