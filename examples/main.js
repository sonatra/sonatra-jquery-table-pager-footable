/*
 * This file is part of the Fxp package.
 *
 * (c) François Pluchino <francois.pluchino@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import 'bootstrap/less/bootstrap.less';
import 'font-awesome/less/font-awesome.less';
import 'footable/less/footable.standalone.less';
import '@fxp/jquery-table-pager/less/table-pager.less';
import '@fxp/jquery-table-pager/less/table-sort.less';
import '@fxp/jquery-table-pager/js/locale/fr';
import '../js/table-pager-footable';
import $ from 'jquery';

$('#table-example').footable();
