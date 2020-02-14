import React from 'react';
import { connect } from 'react-redux';
import TenantForm from './TenantForm';
import { startEditTenant } from '../../actions/tenants/tenants';

export class EditTenantPage extends React.Component {

  onSubmit = (tenant) => {
    this.props.startEditTenant(this.props.tenant.id, tenant);
    this.props.history.push('/tenants');
  }

  render() {
    return (
      <div>
        <div className='page-header'>
          <div className='content-container'>
            <h1 className='page-header__title'>Edit Tenant</h1>
          </div>
        </div>
        <div className='content-container'>
          <TenantForm
            tenant={this.props.tenant}
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => {
  return {
  tenant: state.tenants.find((tenant) => tenant.id === props.match.params.id)
}};

const mapDispatchToProps = (dispatch, props) => ({
  startEditTenant: (id, tenant) => dispatch(startEditTenant(id, tenant))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTenantPage);
