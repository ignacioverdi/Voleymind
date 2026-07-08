/* datos_voley.js — DEMO para VoleyIQ
   Define las funciones de clasificación de objetivos para que el
   Panel en Vivo funcione en modo demostración (sin datos reales).
   En la versión completa, este archivo lo GENERA el sistema al
   procesar los archivos .dvw de DataVolley con los datos del equipo. */

// Clasifica un valor según los umbrales de su métrica (verde/amarillo/rojo)
function objClassify(id, val){
  var m = (window.OBJETIVOS_CONFIG && window.OBJETIVOS_CONFIG.metas) ? window.OBJETIVOS_CONFIG.metas[id] : null;
  if(!m || val===null || val===undefined){
    return {color:'#334155', bg:'rgba(51,65,85,.08)', border:'rgba(51,65,85,.2)', label:'—'};
  }
  // g2 = meta alta (verde fuerte), g1 = meta base (verde), y = umbral amarillo
  if(val >= m.g2) return {color:'#22c55e', bg:'rgba(34,197,94,.10)', border:'rgba(34,197,94,.35)', label:'Top'};
  if(val >= m.g1) return {color:'#4ade80', bg:'rgba(74,222,128,.09)', border:'rgba(74,222,128,.30)', label:'Bien'};
  if(val >= m.y)  return {color:'#f59e0b', bg:'rgba(245,158,11,.09)', border:'rgba(245,158,11,.30)', label:'Medio'};
  return {color:'#ef4444', bg:'rgba(239,68,68,.09)', border:'rgba(239,68,68,.30)', label:'Bajo'};
}

// Clasifica un valor de jugador comparado con el equipo
function objClassifyVsTeam(val, eqVal){
  if(val===null || val===undefined || eqVal===null || eqVal===undefined){
    return {color:'#334155', bg:'rgba(51,65,85,.08)', border:'rgba(51,65,85,.2)', label:'—'};
  }
  var diff = val - eqVal;
  if(diff >= 3)  return {color:'#22c55e', bg:'rgba(34,197,94,.10)', border:'rgba(34,197,94,.35)', label:'+Equipo'};
  if(diff >= -3) return {color:'#f59e0b', bg:'rgba(245,158,11,.09)', border:'rgba(245,158,11,.30)', label:'≈Equipo'};
  return {color:'#ef4444', bg:'rgba(239,68,68,.09)', border:'rgba(239,68,68,.30)', label:'−Equipo'};
}

// Sin datos reales cargados: el panel usa sus valores de demostración internos.
// window.VOLEY_DATA y window.HISTORIAL_DATA quedan sin definir a propósito
// (sólo existen cuando se procesan los .dvw reales del equipo).
